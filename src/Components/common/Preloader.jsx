import React from 'react'
function Preloader() {
    setTimeout(() => {
        document.getElementById("none").classList.add("hidden");
        document.body.classList.remove("over_hidden");
    }, 3000);
    return (
        <div>
            <div id="none" className="h-screen w-full bg-[#F9F9F9] fixed top-0 start-0  z-40">
                <div class="flex items-center justify-center h-screen rotate-45">
                    <div class="relative">
                        <div class="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
                        <div class="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                    </div>

                    <div class="relative">
                        <div class="w-10 h-10 border-purple-200 border-2 rounded-full"></div>
                        <div class="w-10 h-10 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                    </div>

                    <div class="relative">
                        <div class="w-5 h-5 border-purple-200 border-2 rounded-full"></div>
                        <div class="w-5 h-5 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader