const w = "?"
console.log(
    <h1 c:v2>
        <v>hello{"world!"}</v>
        <v>hello{"world" + w}</v>
    </h1>
)

const V = () => "hi"
console.log(<V hello="world">what</V>)