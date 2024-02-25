import { PrismaClient } from "@prisma/client";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const prisma = new PrismaClient();

const seed = async () => {
  const currentFileUrl = import.meta.url;
  const currentDir = dirname(fileURLToPath(currentFileUrl));
  const jsonFilePath = resolve(currentDir, "./data/champions.json");
  const champions = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

  for (let champion of champions) {
    try {
      await prisma.champion.create({
        data: {
          name: champion.name,
          type: champion.type,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
};

seed();
