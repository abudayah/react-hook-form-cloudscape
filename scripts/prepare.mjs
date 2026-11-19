import { execSync } from "node:child_process";

if (process.env.npm_config_dry_run === "true") {
  console.log("Skipping Husky hook installation during npm ci --dry-run.");
} else {
  execSync("husky", { stdio: "inherit" });
}
