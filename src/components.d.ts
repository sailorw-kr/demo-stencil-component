/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CounterComponentExample {
        "btntext"?: string;
        "variant"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCounterComponentExampleElement extends Components.CounterComponentExample, HTMLStencilElement {
    }
    var HTMLCounterComponentExampleElement: {
        prototype: HTMLCounterComponentExampleElement;
        new (): HTMLCounterComponentExampleElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "counter-component-example": HTMLCounterComponentExampleElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CounterComponentExample {
        "btntext"?: string;
        "onDidReset"?: (event: CustomEvent<any>) => void;
        "variant"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "counter-component-example": CounterComponentExample;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "counter-component-example": LocalJSX.CounterComponentExample & JSXBase.HTMLAttributes<HTMLCounterComponentExampleElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
