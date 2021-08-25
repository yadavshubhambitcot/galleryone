import React from 'react'
import Header from './Header'
import img from "../assest/img/img2.png"


export default function About() {
    return (
      <div className="container">
        <Header />
        <p style={{ textAlign: "center" }}> welcome to about page</p>
        <div id="content" className="row">
          <div className="col-sm-12">
            <img src={img} alt="No image found" />
          </div>
          <div className="col-sm-12">
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              harum facilis ipsam fuga, eaque, qu as tenetur ea eius hic,
              consequatur earum voluptatibus temporibus numquam! Ducimus
              expedita voluptatum sap iente ex asperiores a at aspernatur
              corporis eum provident, neque repellat dolorem ipsa? Maxime
              accusantium enim porro perspiciatis quam hic optio expedita veniam
              amet natus distinctio eos quibusdam, accusamus exercita tionem,
              odio numquam, voluptatum magni ea necessitatibus. Sit, quibusdam.
              Consectetur dicta velit accusantium i ure nihil, eaque adipisci
              dolores distinctio, maxime beatae, aspernatur optio atque eos ab
              est cum! Cupiditate qu os iusto consequatur libero asperiores quas
              fugit amet aliquam a repudiandae ipsa, illo illum, iste blanditiis
              del ectus laboriosam. Dolorum magni, ipsum tenetur aperiam facilis
              minus ullam! Error ipsam dolor beatae culpa volupta s sapiente ab
              quod at inventore sit ducimus illo vel magnam tempore, nemo
              deserunt ipsum repellat obcaecati quaerat molestiae susci
            </h4>
          </div>
        </div>
      </div>
    );
}
