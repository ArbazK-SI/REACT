import { Component } from "react";
import PropTypes from 'prop-types';
 
class Child extends Component{ 
    render(){
        return <div>
                    <h2>Child Component</h2>
                    { this.props.show ? <fieldset>
                        <legend>Terms and Conditions</legend>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quis earum perspiciatis in deleniti. Odit repudiandae quam officia accusamus veniam, ad amet sunt molestias omnis sequi! Pariatur dolorem eaque assumenda.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur maiores, quia, laborum, doloremque nisi dolorem ad explicabo corporis eligendi porro maxime harum. Dolore dolores velit facilis quo expedita voluptatem ea.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nesciunt magni natus eligendi dolore odit porro. Architecto aperiam quia officiis ad, vel eum provident, necessitatibus, excepturi ea voluptatem omnis labore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi maxime consequatur unde, debitis quam non laboriosam dolorum, nisi eveniet blanditiis numquam, sequi quisquam deleniti animi nostrum quae! Numquam, itaque!
                        </div>
                    </fieldset> : "Field set is hidden" }
                </div>
    }
}
 
Child.propTypes={
    show : PropTypes.bool.isRequired,
    version : PropTypes.number,
}
export default Child;