(function(){
    'use strict'
    
    let $cto = document.querySelector('.cto');
    let $btn = document.querySelector('.btn-primary');
    let $container = document.querySelector('.itens-cto');
    
    $btn.addEventListener('click', (e)=>{

        e.preventDefault();
        let $sinalPon = parseInt(document.querySelector('.Sinal-Pon').value);
        let qtdCto = parseInt( $cto.value );
        let $spliter = document.querySelector('#spliter').selectedIndex;
        let $sinalMaximo = parseInt(document.querySelector('.sinalMaximo').value);
        
        
        render(qtdCto, $sinalPon, $spliter, $sinalMaximo)
    })
    




    function render(qtdCto, pon, spliter, sinalMaximo){
        
        $container.innerHTML = " ";
        
        let arr1 = ["5/95", "10/90", "15/85", "20/80", "30/70", "40/60", "50/50"]
        let arr2 = [14.6, 11.3, 9.6, 7.9, 6, 4.7, 3.6]
        let arr3 = [0.4, 0.6, 1, 1.2, 1.9, 2.7, 3.6]
        
        let n = 0
        let spt = arr1[n]
        let spt1 = arr2[n]
        let spt2 = arr3[n]
        let _in = pon;
        let out1 = _in - spt1;
        let out2 = _in - spt2;
        let spliter1 = spliter == 0 ? "1X8" : "1X16";
        let spliter2 = spliter == 0 ? 10.5 : 13.7;
        
        
        
        for(var i=0; i<qtdCto; i++){
            
            
            if(i > 0){
                _in = out2;
                out1 = parseFloat((_in - 14.6).toFixed(1));
                
            }
            out2 = (_in - 0.4).toFixed(1);
            
            
            if((out1 - spliter2)<sinalMaximo){
                n += 1
                if(n < arr1.length){
                    spt = arr1[n]
                    spt1 = arr2[n]
                    spt2 = arr3[n]
                    out1 = (_in - spt1).toFixed(2);
                    out2 = (_in - spt2).toFixed(2);
                }
            }

            $container.innerHTML += `
            <div class="item">
            <h4>CTO ${i+1}</h4>
            <div class="item-content">
            <p class="text-item">Spliter ${spt}</p>
            <p class="">${spt1} | ${spt2}</p>
            <div class="props-item">
            <div class="parametros">
            <p class="text-parametros">IN ${_in}</p>
            </div>
            <div class="parametros">
            <p class="text-parametros">Out1 ${out1} </p>
            </div>
            <div class="parametros">
            <p class="text-parametros">OUT2 ${out2}</p>
            </div>
            </div>
            <p class="">${spliter1}</p>
            <p class="">-${spliter2}</p>
            </div>
            <h4 class="result">${(out1 - spliter2).toFixed(1)}</h4>
            </div>
            ` ;
            

            
            
        }
        
    }
    
})()