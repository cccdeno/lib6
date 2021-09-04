export async function dirList(fpath:string) {
    let list = []
    for await (const entry of Deno.readDir(fpath)) {
        list.push(entry)
    }
    return list
}

// 若要更詳細的檔案描述資訊，像是 last update time, 可用 Deno.stat(fpath)
// https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.FileInfo

export async function readJson(fpath:string) {
    try {
        let json = await Deno.readTextFile(fpath)
        return JSON.parse(json)
    } catch (error) {
        return
    }
}
