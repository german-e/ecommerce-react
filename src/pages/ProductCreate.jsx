const ProductCreate = () => {
    const handleSumbit = () => {

    }
    return ( 
        <section className="my-5 h-100">
            <h2 className="mb-5">Crear un nuevo Producto</h2>
            <form onSubmit={handleSumbit}>


                <div  className="row mb-4">
                    <label className="col-sm-3 col-form-label" htmlFor="name">Nombre del producto</label>
                    <div className="col-sm-9">
                        <input className="form-control" id="name" />

                    </div>
                </div>

                <div className=" row mb-4">
                    <label className="col-sm-3 col-form-label" htmlFor="description">Nombre del producto</label>
                    <div className="col-sm-9">
                        <input className="form-control" id="description" />
                    </div>
                </div>

                <div className="row mb-4">
                    <label className="col-sm-3" htmlFor="price">Precio</label>
                    <div className="col-sm-9">

                    <input className="form-control" id="price" />
                    </div>
                </div>

                <div className="row mb-4">
                    <label htmlFor="image" className="col-sm-3 col-form-label">Image</label>
                    <div className="col-sm-9">
                        <input className="form-control" type="file" id="image" />
                    </div>
                </div>


            <div className="d-flex w-100 justify-content-end mt-5">
                <button className="btn btn-primary justify-content-center px-5 py-2" type="submit">Aceptar  <i className="fas fa-save mx-2"></i></button>
            </div>


            </form>
        </section>
     );
}
 
export default ProductCreate;