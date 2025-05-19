// Enable TEE + verifiable execution
import { SecurityLayer } from "edwin-sdk";

SecurityLayer.enable({
  tee: true,
  proofs: true
}).then(() => {
  console.log("🛡 Security Layer Active: TEE + Proofs");
});
