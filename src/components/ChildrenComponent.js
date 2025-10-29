export const ChildrenComponent = (props) => {
    return <div>
        <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
    </div>
}
