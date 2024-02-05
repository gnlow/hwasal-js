export declare namespace JSX {
    interface IntrinsicElements {
        [tag: string]: any
    }
}

type Dynamic = string

export const jsxTemplate = (strings: string[], ...dynamics: Dynamic[]) => {
    console.log("tmp:", dynamics)
    return strings
}
export const jsxAttr = (name: string, value: string): Dynamic => {
    console.log("att:", name, "=", value)
    return "lol"
}
export const jsxEscape = (value: string) => {
    console.log("esc:", value)
    return value
}
export const jsx = (type: string, props: string[], key: string) => {
    console.log("jsx:", type, props, key)
}