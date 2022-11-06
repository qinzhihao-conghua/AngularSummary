export default class Watermark {
    /**
     * 设置水印
     * @param str 水印文字
     * @returns 
     */
    setWatermark(str: string, parentNodeId: string) {
        // let id = Math.random().toString();
        let id = '333';
        const parentNode = document.getElementById(parentNodeId) as HTMLElement;
        parentNode.style.position = 'relative';
        const pWidth = parentNode.clientWidth;
        const pHeight = parentNode.clientHeight;
        console.log('gg', id)
        if (document.getElementById(id) !== null) {
            parentNode.removeChild(document.getElementById(id) as HTMLElement);
        }

        //创建一个画布
        let can = document.createElement('canvas') as HTMLCanvasElement;
        //设置画布的长宽
        can.width = 300;
        can.height = 300;

        let cans = can.getContext('2d')!;
        //旋转角度
        cans.rotate(-15 * Math.PI / 180);
        cans.font = '18px Vedana';
        //设置填充绘画的颜色、渐变或者模式
        cans.fillStyle = 'rgba(100, 100, 100, 0.50)';
        //设置文本内容的当前对齐方式
        cans.textAlign = 'left';
        //设置在绘制文本时使用的当前文本基线
        cans.textBaseline = 'middle';
        //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
        const xCount = Math.floor(can.height / 4);//40
        const yCount = Math.floor(can.height / 4);//40
        for (let i = 0; i < 4; i++) {
            // const element = array[index];
            // cans.fillText(str, can.width / 8, can.height / 2);
            for (let j = 0; j < 4; j++) {
                cans.fillText(str, xCount * (i - 1), yCount * (j + 1) + xCount);
            }
        }

        let div = document.createElement('div');
        div.id = id;
        div.style.pointerEvents = 'none';
        div.style.top = '0px';
        div.style.left = '0px';
        div.style.position = 'absolute';
        div.style.zIndex = '1000000000';
        div.style.width = '100%';
        div.style.opacity = '0.7';
        div.style.height = parentNode.scrollHeight + 'px';
        // 背景图片
        div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
        // div.style.background = 'url(' + '' + ') left top repeat';
        div.style.backgroundSize = '100%';
        parentNode.appendChild(div);
        console.log('dd', id);
        window.onresize = () => {
            console.log('ee')
            this.setWatermark(str, parentNodeId);
        };
        return id;
    }
    /**
     * 设置页眉页脚为空
     */
    setHeader() {
        // 添加一个间距
        let style = document.createElement('style')

        style.innerHTML = "@page{size: a4;margin:" + '10mm' + "}"

        window.document.head.appendChild(style);

        //设置页眉页脚为空
        let hkey_root, hkey_path, hkey_key;
        hkey_root = "HKEY_CURRENT_USER";
        hkey_path = "\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
        // let RegWsh = new ActiveXObject("WScript.Shell");
        // hkey_key = "header";
        // RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
        // hkey_key = "footer";
        // RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
    }
    /**
     * 删除水印结点
     * @param id 水印id
     * @param parentNodeId 水印父容器id 
     */
    removeWatermark(id: string, parentNodeId: string) {
        if (document.getElementById(id) !== null) {
            const parentNode = document.getElementById(parentNodeId) as HTMLElement;
            parentNode.removeChild(document.getElementById(id) as HTMLElement);
        }
    }
}