const $ = (a: number) => (() => a) as unknown as number

let count = $(0)
const Counter = () => count++

export default
    <Counter>
        Fired {count} arrows
    </Counter>