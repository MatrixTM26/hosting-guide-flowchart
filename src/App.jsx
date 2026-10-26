import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { useScrollManager } from "./hooks/useScrollManager";

const Home = lazy(() => import("./components/Home"));
const AlurPembuatan = lazy(() => import("./components/AlurPembuatan"));
const WorkflowHosting = lazy(() => import("./components/WorkflowHosting"));
const Praktik = lazy(() => import("./components/Praktik"));
const Tentang = lazy(() => import("./components/Tentang"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
    useScrollManager();

    return (
        <>
            <Navbar />
            <main>
                <Suspense fallback={null}>
                    <Home />
                    <AlurPembuatan />
                    <WorkflowHosting />
                    <Praktik />
                    <Tentang />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </>
    );
}
