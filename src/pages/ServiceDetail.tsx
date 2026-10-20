import { useParams } from "react-router";

function ServiceDetail() {
    const { slug } = useParams();
    return <h1>Service: {slug}</h1>;
}

export default ServiceDetail;
