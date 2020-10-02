/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component,
              rendererList) {
        'use strict';
        rendererList.push(
            {
                type: 'epos',
                component: 'Expresspay_Epos/js/view/payment/method-renderer/epos-method'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);