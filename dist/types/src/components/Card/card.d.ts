import { BaseElement } from '../Base/base-element';
export declare class Card extends BaseElement {
    direction: 'row' | 'column';
    layout: string;
    readonly layoutCSS: string;
    updateTemplate(): string;
    updateStyle(): string;
}
