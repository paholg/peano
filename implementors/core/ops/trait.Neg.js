(function() {var implementors = {};
implementors['peano'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='peano/struct.Zero.html' title='peano::Zero'>Zero</a>","impl&lt;N&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='peano/struct.Succ.html' title='peano::Succ'>Succ</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='peano/trait.NonNeg.html' title='peano::NonNeg'>NonNeg</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>, N::Output: <a class='trait' href='peano/trait.NonPos.html' title='peano::NonPos'>NonPos</a></span>","impl&lt;N&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='peano/struct.Pred.html' title='peano::Pred'>Pred</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='peano/trait.NonPos.html' title='peano::NonPos'>NonPos</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>, N::Output: <a class='trait' href='peano/trait.NonNeg.html' title='peano::NonNeg'>NonNeg</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
