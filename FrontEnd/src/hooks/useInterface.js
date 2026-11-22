import { useContext } from "react";
import { InterfaceContext } from "../context/InterfaceContext";

export default function useInterface() {
    const ctx = useContext(InterfaceContext)
    if (ctx === null) throw new Error("useInterface doit être utilisé dans <InterfaceProvider>");
    return ctx;
}
