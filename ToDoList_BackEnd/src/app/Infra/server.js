import "dotenv/config";
import main from "./main";

import "../database";

const port = process.env.PORT || 7071;

main().then((app) => {
  app.listen(port, () => {
    console.log("servidor rodando na porta 7071");
  });
});
