import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get product ID from URL params
    const [ptitle, setPtitle] = useState('');
    const [pprice, setPprice] = useState('');
    const [pfile, setPfile] = useState(null);
    const [message, setMessage] = useState('');

    // Fetch product details on component mount
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost/reactcrudphp/api/product.php?id=${id}`);
                if (response.data) {
                    setPtitle(response.data.ptitle);
                    setPprice(response.data.pprice);
                }
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
        fetchProduct();
    }, [id]);

    const updateProduct = async () => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('ptitle', ptitle);
        formData.append('pprice', pprice);
        if (pfile) {
            formData.append('pfile', pfile);
        }
        
        try {
            const response = await axios.post("http://localhost/reactcrudphp/api/update_product.php", formData, {
                headers: { 'Content-Type': "multipart/form-data" },
            });
            if (response.data.success) {
                setMessage(response.data.success);
                setTimeout(() => {
                    navigate('/productlist');
                }, 2000);
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct();
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <h5 className="mb-4">Edit Product</h5>
                        <p className="text-warning">{message}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-3">Product Title</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" value={ptitle} onChange={(e) => setPtitle(e.target.value)} />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-3">Product Price</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" value={pprice} onChange={(e) => setPprice(e.target.value)} />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-3">Product Image</label>
                                <div className="col-sm-9">
                                    <input type="file" className="form-control" onChange={(e) => setPfile(e.target.files[0])} />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-3"></label>
                                <div className="col-sm-9">
                                    <button type="submit" className="btn btn-info">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EditProduct;
