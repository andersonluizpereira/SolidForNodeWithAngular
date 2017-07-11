"use strict";
var router_1 = require("@angular/router");
var LivrosComponent_1 = require("./livros/livros.component");
var appRoutes = [
    { path: '**', redirectTo: '' }
    { path: 'listagem', component: listagem_component_1.LivrosComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);