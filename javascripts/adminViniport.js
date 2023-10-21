class adminViniport {


    constructor(config){

        this.rows = document.querySelectorAll('table tbody tr')

        this.initButtons()

        this.options = config
    }

    
    getDatarow(e){

        let tr = e.target.closest('[data-row]')
       
        return  JSON.parse(tr.dataset.row)

    }


    btnExcludeClick(e){

        let data = this.getDatarow(e)
            
        if(confirm(eval("`"+ this.options.deleteMsg +"`"))){
    
          fetch(eval("`"+ this.options.deleteURL +"`"), {
            method:'DELETE'
      
          })
          .then(response => response.json())
          .then(
            json =>{
                window.location.reload()
            }
          )
    
        }
  
      }


    initButtons(){

        this.rows.forEach(row =>{

            row.querySelectorAll('.btn').forEach(btn =>{

                btn.addEventListener('click', e =>{

                    if(btn.classList.contains('btn-delete')){
    
                        this.btnExcludeClick(e)
    
                    }
                })
            })
        })


    }

}