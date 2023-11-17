(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		</style>
    <head>
      <link rel="import" href="template.html" id="myTemplate">
    </head>
    <body>
      <div id="container"></div>
    </body>
	`;

	class NavigationMenuBar extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
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

        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){

        }

        redraw(

        );

	}

customElements.define("com-sap-sample-navbarmenu-aps", NavigationMenuBar);
})();