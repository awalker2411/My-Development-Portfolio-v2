export default function Applications(props){
    return(
        <>
            {props.applications.map(app =>(
                <section key={app}>
                    <h2>{app.name}</h2>
                    <img src={app.img}/>
                    <section>
                        <p>{app.description}</p>
                        <a href={app.url} target="_blank">App Website</a>
                        <br></br>
                        <a href={app.ghRepo} target="_blank">GitHub</a>
                    </section>
                </section>
            ))}
        </>
    )
}