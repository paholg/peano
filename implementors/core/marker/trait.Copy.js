(function() {var implementors = {};
implementors['peano'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='peano/struct.Zero.html' title='peano::Zero'>Zero</a>","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='peano/trait.NonNeg.html' title='peano::NonNeg'>NonNeg</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='peano/struct.Succ.html' title='peano::Succ'>Succ</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='peano/trait.NonPos.html' title='peano::NonPos'>NonPos</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='peano/struct.Pred.html' title='peano::Pred'>Pred</a>&lt;N&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
