export const NameList = () => {
    const names = ['Muzamil', 'Husain', 'Hideri'];
    return <div>
        {names.map((name) => <h2 key={name}>{name}</h2>)}
    </div>
}
