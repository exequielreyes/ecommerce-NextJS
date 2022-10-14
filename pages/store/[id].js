import Layout from "../../components/layout"
import Product from "../../components/product";
import { getItemData, getPathsFromIds } from "../../lib/utils";


export default function ProductPage({ productInfo }) {
    return(
        <Layout>
            <Product item={productInfo.data}  showAs="Page"/>
        </Layout>
    );
}

//nos permite generar la ruta dinamicas para cada uno de nuestros elementos
export async function getStaticPaths() {
    const paths = await getPathsFromIds(); //ya tenemos un arreglo de objetos

    return {
        paths: paths, //el nombre de la propiedad tiene que ser path
        fallback: false, //si la ruta no existe no manda a una pagina 404
    };
}

export  async function getStaticProps({ params }){
    const id = params.id;
    const product = await getItemData(id)

    return {
        props:{
            productInfo: product,
        },
    };
}