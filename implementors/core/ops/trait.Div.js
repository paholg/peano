(function() {var implementors = {};
implementors['peano'] = ["impl&lt;Rhs&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;Rhs&gt; for <a class='struct' href='peano/struct.Zero.html' title='peano::Zero'>Zero</a> <span class='where'>where Rhs: <a class='trait' href='peano/trait.Peano.html' title='peano::Peano'>Peano</a></span>","impl&lt;Lhs, Rhs&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;Rhs&gt; for <a class='struct' href='peano/struct.Succ.html' title='peano::Succ'>Succ</a>&lt;Lhs&gt; <span class='where'>where Lhs: <a class='trait' href='peano/trait.NonNeg.html' title='peano::NonNeg'>NonNeg</a>, <a class='struct' href='peano/struct.Succ.html' title='peano::Succ'>Succ</a>&lt;Lhs&gt;: DivPrivate&lt;Rhs&gt;</span>","impl&lt;Lhs, Rhs&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;Rhs&gt; for <a class='struct' href='peano/struct.Pred.html' title='peano::Pred'>Pred</a>&lt;Lhs&gt; <span class='where'>where Lhs: <a class='trait' href='peano/trait.NonPos.html' title='peano::NonPos'>NonPos</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>, Rhs: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>, <a class='struct' href='peano/struct.Succ.html' title='peano::Succ'>Succ</a>&lt;Lhs::Output&gt;: DivPrivate&lt;Rhs::Output&gt;, Lhs::Output: <a class='trait' href='peano/trait.NonNeg.html' title='peano::NonNeg'>NonNeg</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
