import { httpServer } from "@/infrastructure/http/http-server";
import { getEnv } from "@/infrastructure/configuration/dotenv";

httpServer.listen(getEnv().HTTP_PORT, () =>
  console.log(`Application started on ${getEnv().HTTP_PORT}`)
);
