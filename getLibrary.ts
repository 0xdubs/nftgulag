import type {
  ExternalProvider,
  JsonRpcFetchFunc,
} from "@ethersproject/providers";
import { Web3Provider } from "@ethersproject/providers";

export default function getLibrary(
  provider: ExternalProvider | JsonRpcFetchFunc
) {
  const library = new Web3Provider(provider);
  library.pollingInterval=12000;
  return library
}
