import "./style.scss"

function index({children}) {
    return <div className="container">
        {children}
    </div>
}

export default index;