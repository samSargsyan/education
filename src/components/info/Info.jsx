import './info.scss';

const Info = ({title,text}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
        
    )
}

export default Info;