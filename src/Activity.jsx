let Activity = ({data}) => {


    return (
    data && <>
    <h2>{data.activity}</h2>
    <h3>Type:{data.type}</h3>
    <h3>Participants: {data.participants}</h3>
    </>)
}

export default Activity