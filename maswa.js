window.onload = () => {
    setTimeout(function () {

        const liquid_search_input_lg = document.getElementById("cx_1630815321671_search_input_lg");
        const cx_1630815321671_search_input_md_sm = document.getElementById("cx_1630815321671_search_input_md_sm");
        liquid_search_input_lg?.removeAttribute("placeholder");
        cx_1630815321671_search_input_md_sm?.removeAttribute("placeholder");

        timeout_var = null;

        function typeWriter(selector_target, text_list, placeholder = false, i = 0, text_list_i = 0, delay_ms = 110) {
            if (!i) {
                if (placeholder) {
                    document.querySelector(selector_target).placeholder = "";
                }
                else {
                    document.querySelector(selector_target).innerHTML = "";
                }
            };
            txt = text_list[text_list_i];
            if (i < txt.length) {
                if (placeholder) {
                    document.querySelector(selector_target).placeholder += txt.charAt(i);
                }
                else {
                    document.querySelector(selector_target).innerHTML += txt.charAt(i);
                }
                i++;
                setTimeout(typeWriter, delay_ms, selector_target, text_list, placeholder, i, text_list_i);
            }
            else {
                text_list_i++;
                if (typeof text_list[text_list_i] === "undefined") {
                    setTimeout(typeWriter, (delay_ms * 5), selector_target, text_list, placeholder);
                }
                else {
                    i = 0;
                    setTimeout(typeWriter, (delay_ms * 3), selector_target, text_list, placeholder, i, text_list_i);
                }
            }
        };

        text_list = [
            "Search By Products Name",
            "Example 1 : Mixed Honey Nuts",
            "Example 2 : চিনিগুড়া চাল ",
            "Example 3 : চাকের মধু"
        ];

        typeWriter("#cx_1630815321671_search_input_lg", text_list, true);
        typeWriter("#cx_1630815321671_search_input_md_sm", text_list, true);

        // catagories add 
        const cx_1630815321671_header_nav = document.querySelector(".cx_1630815321671_header_nav");
        const customCatagoriesWrapper = elementMaker("div", ["allProductMneuWrapper"]);
        cx_1630815321671_header_nav.appendChild(customCatagoriesWrapper);

        const cataroeis1 = elementMaker("span", ["Catagories_menu"], "catagires1_id");
        cataroeis1.textContent = `Men's Fashion`;
        customCatagoriesWrapper.appendChild(cataroeis1);
        cataroeis1.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate('/category/6385df9bd6b4eadb004f3e00');
        });

        const cataroeis2 = elementMaker("span", ["Catagories_menu"], "catagires2_id");
        cataroeis2.textContent = `Mobile Accessories`;
        customCatagoriesWrapper.appendChild(cataroeis2);
        cataroeis2.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate('/category/6385dfd0d6b4eadb004f3f23');
        });

        const cataroeis3 = elementMaker("span", ["Catagories_menu"], "catagires3_id");
        cataroeis3.textContent = `Computer Accessories`;
        customCatagoriesWrapper.appendChild(cataroeis3);
        cataroeis3.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate('/category/6385dff5d6b4eadb004f3fde');
        });

        const cataroeis4 = elementMaker("span", ["Catagories_menu"], "catagires4_id");
        cataroeis4.textContent = `Gadgets`;
        customCatagoriesWrapper.appendChild(cataroeis4);
        cataroeis4.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate('/category/6385e021d6b4eadb004f4060');
        });

        const cataroeis5 = elementMaker("span", ["Catagories_menu"], "catagires5_id");
        cataroeis5.textContent = `Natural Foods`;
        customCatagoriesWrapper.appendChild(cataroeis5);
        cataroeis5.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate('/category/6385e039d6b4eadb004f40a9');
        });

        const cataroeis6 = elementMaker("span", ["Catagories_menu"], "catagires6_id");
        cataroeis6.textContent = `Women's Fashion`;
        customCatagoriesWrapper.appendChild(cataroeis6);
        cataroeis6.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate('/category/63b0f5147edabc1cc79c8195');
        });
        const cataroeis7 = elementMaker("span", ["Catagories_menu"], "catagires7_id");
        cataroeis7.textContent = `Kid's Zone`;
        customCatagoriesWrapper.appendChild(cataroeis7);
        cataroeis7.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate('/category/63b0f5201df4161cd4dddb37');
        });











        function elementMaker(name, className, id) {
            try {
                let element = document.createElement(name);
                className && (element.className = className.join(" "));
                id && (element.id = id);
                return element;
            } catch (err) {
                console.log(err.message);
            };
        };

        function setAttributes(elementName, allAttributes) {
            for (let key in allAttributes) {
                elementName.setAttribute(key, allAttributes[key]);
            };
        };
    }, 1350);
}