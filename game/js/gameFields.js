FieldsUtility = { 

  getFields: function () {
    return {
      Slug: 1,
      Vendor: 2,
      Name: 4,
      ShortName: 8,
      Description: 16,
      AnonymousFunMode: 32,
      FunMode: 64,
      RealMode: 128,
      NewGame: 256,
      License: 512,
      Popularity: 1024,
      Width: 2048,
      Height: 4096,
      Thumbnail: 8192,
      Logo: 16384,
      BackgroundImage: 32768,
      Url: 65536,
      HelpUrl: 131072,
      Categories: 262144,
      Tags: 524288,
      Platforms: 1048576,
      RestrictedTerritories: 2097152,
      TheoreticalPayOut: 4194304,
      BonusContribution: 8388608,
      JackpotContribution: 16777216,
      FPP: 33554432,

      // live casino special fields
      TableID: 67108864,
      OpenStatus: 134217728,
      OpeningTime: 268435456,
      Limitation: 536870912,
      Category: 1073741824,
      NewTable: 2147483648,
      VipTable: 4294967296,
      Currencies: 8589934592,
      Languages: 17179869184
    };
  },

  getExpedtedFormat: function () {
    return 'map'; // other option is array
  },

  getShortFormFields: function () {
    var fields = this.getFields();
    return fields.Slug + fields.Vendor + fields.Name + fields.Thumbnail + fields.Url;
  },

  getGameFields: function () {
    var fields = this.getFields();
    return fields.Slug + fields.Vendor + fields.Name + fields.Thumbnail + fields.Url
        + fields.Categories + fields.License + fields.Platforms + fields.BackgroundImage + fields.AnonymousFunMode
        + fields.FunMode + fields.RealMode + fields.Popularity + fields.HelpUrl + fields.Width + fields.Height;
  },

  getLiveCasinoFields: function() {
    var fields = this.getFields();
    return fields.TableID + fields.OpenStatus + fields.Vendor 
      + fields.OpeningTime + fields.Limitation + fields.Category + fields.ShortName + fields.Thumbnail;
  },

  getJackpotFields: function() {
    var fields = this.getFields();
    return fields.Slug + fields.ShortName + fields.Platforms;
  },

  getGameSortFields: function (sortOrder) {
    var fields = this.getFields();
    //default to ASC if not passed in
    var sort_order = typeof sortOrder !== 'undefined' ?  sortOrder : 'ASC';
    return [
      {field: fields.Name, order: sort_order}
    ];
  },

  getTableSortFields: function () {
    var fields = this.getFields();
    return [
      {field: fields.Name, order: 'ASC'}
    ];
  },

  getTableFields: function () {
    var fields = this.getFields();
    return fields.Slug + fields.Vendor + fields.Name + fields.Thumbnail + fields.Url
        + fields.Categories + fields.Platforms + fields.BackgroundImage
        + fields.TableID + fields.ShortName +  fields.Category
        + fields.OpenStatus + fields.Limitation + fields.JackpotContribution
        + fields.Logo + fields.OpeningTime;
  },

  makeGameSortFields: function (sortBy, sortOrder) {
    var ret = [];
    var fields = this.getFields();
    var item = {field: fields.Name, order: 'ASC'}; //default
    if (sortBy != null) {
      item.field = sortBy; //must be int
    }
    if (sortOrder != null) {
      item.order = sortOrder; //must be 'DESC' or 'ASC'
    }
    ret.push(item);
    return ret;
  }

}
