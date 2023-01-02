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

        const largeDevicePlaceholder = liquid_search_input_lg.getAttribute("placeholder");

        const smallDevicePlaceholder = cx_1630815321671_search_input_md_sm.getAttribute("placeholder");

        largeDevicePlaceholder.placeholder.style.color = `red`;








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