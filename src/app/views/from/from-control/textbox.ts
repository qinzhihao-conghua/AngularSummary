import { BaseControl } from './base-control';

//input类，默认文本类型
export class TextBox extends BaseControl<string>{
    controlType = "textbox";
    type: string;
    constructor(options: {} = {}) {
        super(options);
        this.type = options["type"] || "";
    }
}