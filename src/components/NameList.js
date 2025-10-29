export const NameList = () => {
    const names = ['Muzamil', 'Husain', 'Hideri'];
    return <div>
        {names.map((name) => <h2>{name}</h2>)}
    </div>
}
