(function()  {



    let tmpl = document.createElement('template');
    // tmpl.innerHTML = ``;

    fetch("./template.html").then((response) => {
      response.text().then((text) => {
        tmpl.innerHTML = text;
      });
    })

    // if ("content" in document.createElement("template")) {
    //   // Instantiate the table with the existing HTML tbody
    //   // and the row with the template
    //   const tbody = document.querySelector("tbody");
    //   const template = document.querySelector("#productrow");
    //
    //   // Clone the new row and insert it into the table
    //   const clone = template.content.cloneNode(true);
    //   let td = clone.querySelectorAll("td");
    //   td[0].textContent = "1235646565";
    //   td[1].textContent = "Stuff";
    //
    //   tbody.appendChild(clone);
    //
    //   // Clone the new row and insert it into the table
    //   const clone2 = template.content.cloneNode(true);
    //   td = clone2.querySelectorAll("td");
    //   td[0].textContent = "0384928528";
    //   td[1].textContent = "Acme Kidney Beans 2";
    //
    //   tbody.appendChild(clone2);
    // } else {
    //   // Find another way to add the rows to the table because
    //   // the HTML template element is not supported.
    // }


    customElements.define('com-sap-navigation-bar-menu', class NavigationBarMenu extends HTMLElement {


		constructor() {
			super();
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(tmpl.content.cloneNode(true));
		}


        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){

        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
        //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
        /*
        onCustomWidgetResize(width, height){

        }
        */

        redraw(){
        }


    });

})();
