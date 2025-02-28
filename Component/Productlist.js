import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Productlist() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost/reactcrudphp/api/product.php");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log data to check format
        setProduct(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProduct();
  }, []);

  return (
    <div className="container container_overflow">
      <div className="row">
        <div className="col-md-10 mt-4">
          <h5 className="mb-4">Product List</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Sl.No</th>
                <th scope="col">Product Title</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {product.length > 0 ? (
                product.map((pdata, index) => (
                  <tr key={pdata.id || index}>
                    <td>{index + 1}</td>
                    <td>{pdata.ptitle}</td>
                    <td>{pdata.pprice}</td>
                    <td>
                      <img
                        src={`http://localhost/reactcrudphp/images/${pdata.pimage}`}
                        height={50}
                        width={90}
                        alt={pdata.ptitle}
                        onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image
                      />
                    </td>
                    <td>{Number(pdata.status) === 1 ? "Active" : "Inactive"}</td>
                    <td>
                      <Link to={`/editproduct/${pdata.id}`} className="btn btn-success mx-2">
                        Edit
                      </Link>
                      <Link to={`/deleteproduct/${pdata.id}`} className="btn btn-danger">
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">No products available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
