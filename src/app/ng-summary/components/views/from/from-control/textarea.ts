import { BaseControl } from "./base-control";

export class TextArea extends BaseControl<string>{
    controlType = "textarea";
    rows: number;
    constructor(options: {} = {}) {
        super(options);
        this.rows = options['rows'] || 1;
    }
}