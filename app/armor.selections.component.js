"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var armory_service_1 = require('./armory.service');
var ArmorSelectionsComponent = (function () {
    function ArmorSelectionsComponent(_router, _armorService) {
        this._router = _router;
        this._armorService = _armorService;
    }
    ArmorSelectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._armorService.getArmorData()
            .then(function (data) {
            _this.Armory = data;
            _this.TotalArmorPieces = _this.Armory.LargestPieceId;
            _this.TotalSetCount = _this.Armory.LargestSetId;
            _this.ArmorSets = _this.Armory.ArmorSets;
            _this.HeadSeparatePieces = _this.Armory.HeadSeparatePieces;
            _this.ChestSeparatePieces = _this.Armory.ChestSeparatePieces;
            _this.ArmsSeparatePieces = _this.Armory.ArmsSeparatePieces;
            _this.LegsSeparatePieces = _this.Armory.LegsSeparatePieces;
        });
    };
    ArmorSelectionsComponent.prototype.gotoOptimizer = function () {
        var link = ['Optimizer'];
        this._router.navigate(link);
    };
    ArmorSelectionsComponent.prototype.gotoGameProgressSelections = function () {
        var link = ['GameProgress'];
        this._router.navigate(link);
    };
    ArmorSelectionsComponent.prototype.ToggleArmorPiece = function (Piece) {
        Piece.Enabled = !Piece.Enabled;
    };
    ArmorSelectionsComponent.prototype.SetArmorSet = function (Combo, EnableDisable) {
        var SetId;
        if (Combo.Head.SetId != 0)
            SetId = Combo.Head.SetId;
        else if (Combo.Chest.SetId != 0)
            SetId = Combo.Chest.SetId;
        else if (Combo.Arms.SetId != 0)
            SetId = Combo.Arms.SetId;
        else if (Combo.Legs.SetId != 0)
            SetId = Combo.Legs.SetId;
        this.Armory.EnableDisableArmorSet(SetId, EnableDisable);
    };
    ArmorSelectionsComponent = __decorate([
        core_1.Component({
            selector: 'my-armor.selections',
            templateUrl: 'app/armor.selections.component.html',
            styleUrls: ['app/armor.selections.component.css'],
            directives: []
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, armory_service_1.ArmorService])
    ], ArmorSelectionsComponent);
    return ArmorSelectionsComponent;
}());
exports.ArmorSelectionsComponent = ArmorSelectionsComponent;
//# sourceMappingURL=armor.selections.component.js.map