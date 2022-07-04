function Transaction (props) {
    const {date,description,value} = props;
    return (<div>
        <div>
            <p>{date}</p>
            <p>{description}</p>
        </div>
        <p>{value}</p>
    </div>)
}

export default Transaction; 