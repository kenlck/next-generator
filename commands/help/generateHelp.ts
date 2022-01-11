// The response the help command will generate if called in the command line interface.

 export const generateHelp = async () => {
    console.log(`***** User Guide ***** \n `);
    console.log(` Commands:  \n `);
    console.log(` init - generate a nextGenConfig.json  \n `);
    console.log(` exit or e - exit next-generator build mode.  \n `);
    console.log(
      ` help or h - get help and view the latest commands for next-generator  \n `
    );
    console.log(
      ` generate or g - generate new files based on the commands given next  \n  \n `
    );
    console.log(` Generate commands:  \n `);
    console.log(
      ` crud or c - generate a mongoose model, all api routes, and all pages for that model. (Create-Read-Update-Delete)   \n `
    );
    console.log(
      ` crud or c - Format : "generate crud your-model-name field-name:data-type field-name:data-type"   \n `
    );
    console.log(
      ` crud or c - Example : "generate crud vehicle year:Number make:String model:String"   \n  \n `
    );
    console.log(` model or m - generate a mongoose model.  \n `);
    console.log(
      ` model or m - Format : "generate model your-model-name field-name:data-type field-name:data-type"  \n `
    );
    console.log(
      ` model or m - Example : "generate model vehicle year:Number make:String model:String"  \n  \n `
    );
    console.log(
      ` api-routes or a-r - generate next js crud (Create-Read-Update-Delete) api routes.  \n `
    );
    console.log(
      ` api-routes or a-r - Format : "generate api-routes your-model-name field-name:data-type field-name:data-type"  \n `
    );
    console.log(
      ` api-routes or a-r - Example : "generate api-routes vehicle year:Number make:String model:String"  \n  \n `
    );
    console.log(
      ` pages or p - generate next js crud (Create-Read-Update-Delete) pages.  \n `
    );
    console.log(
      ` pages or p - Format : "generate pages your-model-name field-name:data-type field-name:data-type"  \n `
    );
    console.log(
      ` pages or p - Example : "generate pages vehicle year:Number make:String model:String"  \n  \n `
    );
  
    console.log(`***** End of User Guide *****`);
  };

  