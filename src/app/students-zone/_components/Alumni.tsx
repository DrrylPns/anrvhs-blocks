"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Batch1 } from "./Batch1"
import { Batch2 } from "./Batch2"
import { Batch3 } from "./Batch3"
import { Batch4 } from "./Batch4"
import { Batch5 } from "./Batch5"
import { Batch6 } from "./Batch6"

export const Alumni = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center relative mt-11">
            <h1 className="text-[72px] font-bold">Alumni's</h1>
            <div className="w-full">
                <Tabs defaultValue="2017-2018" className="flex flex-col gap-3 mt-7">
                    <TabsList className="flex gap-3 w-full overflow-x-auto">
                        <TabsTrigger value="2017-2018">Batch 2017-2018</TabsTrigger>
                        <TabsTrigger value="2018-2019">Batch 2018-2019</TabsTrigger>
                        <TabsTrigger value="2019-2020">Batch 2019-2020</TabsTrigger>
                        <TabsTrigger value="2020-2021">Batch 2020-2021</TabsTrigger>
                        <TabsTrigger value="2021-2022">Batch 2021-2022</TabsTrigger>
                        <TabsTrigger value="2022-2023">Batch 2022-2023</TabsTrigger>
                    </TabsList>

                    <TabsContent value="2017-2018">
                        <Batch1 />
                    </TabsContent>

                    <TabsContent value="2018-2019">
                        <Batch2 />
                    </TabsContent>

                    <TabsContent value="2019-2020">
                        <Batch3 />
                    </TabsContent>

                    <TabsContent value="2020-2021">
                        <Batch4 />
                    </TabsContent>

                    <TabsContent value="2021-2022">
                        <Batch5 />
                    </TabsContent>

                    <TabsContent value="2022-2023">
                        <Batch6 />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
