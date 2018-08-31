window.onload = function() {

    var funkyFunctions = {




        salsa: function(){

            var danceMoves = [3,2,1,5,6];

            var numSteps = 0;

            for (let i = 0; i<danceMoves.length; i++){
                numSteps = numSteps + danceMoves[i];
            }

            return (numSteps);
        },




        chickenDance: function(){

            var numClucks = 0;

            for (let i = 0; i>5; i++){
                numClucks = numClucks + 5;
        }




            var chicken = {

                funky1:function(){

                    numClucks = numClucks + 10;

                    return(numClucks);

                },

                funky2:function(){

                    return(chicken.funky1());

                }

            }

            return(chicken.funky2());

        },




        shuffle: function(){
            
            var type = ["melbourne","electronic","hardstyle"];

            var myShuffle = {

                type: type[0],

                isPopular: true,

                numClasp: 300

            };

            if (myShuffle.isPopular === true) {
                return(myShuffle.numClasp);
            }

        }

}

    console.log(funkyFunctions.shuffle(),funkyFunctions.salsa(),funkyFunctions.chickenDance());

}