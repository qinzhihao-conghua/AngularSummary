export class ZhUtils {
    /**
     * 深拷贝测试数据
     * obj = {
     *    a: 1,
     *    b: { b1: "qwe", b2: "asd", b3: "zxc" },
     *    c: function () {
     *        console.log("ccc")
     *    },
     *    d: [1, 2, 3, 4],
     *    e: undefined,
     *    f: null,
     *    g: false
     * }
     * arr = [1, "2", { id: 1, name: "张三" }, undefined, null, "", function () { console.log("ccc") }];
     */
    /**
     * 深拷贝
     * @param data 要拷贝的数据
     */
    public static deepClone(data: object | Array<any>) {
        let result = Array.isArray(data) ? [] : {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                // 这里注意null的typeof是object！！！
                if (typeof data[key] === "object" && data[key] !== null) {
                    result[key] = this.deepClone(data[key]);
                }
                else {
                    result[key] = data[key];
                }
            }
        }
        return result;
    }
    /**
     * @desc 函数防抖
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param immediate true 表立即执行，false 表非立即执行
     */
    public static debounce(func: Function, wait: number, immediate: boolean) {
        let timeout;
        return function () {
            let context = this;
            let args = arguments;
            if (timeout) {
                clearTimeout(timeout);
            };
            if (immediate) {
                let callNow = !timeout;
                timeout = setTimeout(() => {
                    timeout = null;
                }, wait);
                if (callNow) {
                    func.apply(context, args);
                }
            }
            else {
                timeout = setTimeout(function () {
                    func.apply(context, args)
                }, wait);
            }
        }
    }
    /**
     * @desc 函数节流,时间戳版可以立即执行
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param type 1 表时间戳版，2 表定时器版
     */
    public static throttle(func: Function, wait: number, type: number) {
        let previous = 0;
        let timeout;
        return function () {
            let context = this;
            let args = arguments;
            if (type === 1) {
                let now = Date.now();
                if (now - previous > wait) {
                    func.apply(context, args);
                    previous = now;
                }
            } else if (type === 2) {
                if (!timeout) {
                    timeout = setTimeout(() => {
                        timeout = null;
                        func.apply(context, args)
                    }, wait)
                }
            }
        }
    }
    /**
     * 数组分组
     * @param groupData 要分组的数据
     * @param filed 按该字段分组
     */
    public static groupBy(groupData: Array<any>, filed: string) {
        let result = groupData.reduce((prevValue, currentValue) => {
            let index = -1;
            prevValue.some((item, i) => {
                if (item[filed] == currentValue[filed]) {
                    index = i;
                    return true;
                }
            })
            if (index > -1) {
                prevValue[index].group.push({
                    project: currentValue.project,
                    score: currentValue.score
                })
            } else {
                prevValue.push({
                    filed: currentValue[filed],
                    group: [{
                        project: currentValue.project,
                        score: currentValue.score
                    }]
                })
            }
            return prevValue;
        }, []);
        console.log(result);
        return result;
    }
}