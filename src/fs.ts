// 若要更詳細的檔案描述資訊，像是 last update time, 可用 Deno.stat(fpath)
// https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.FileInfo

export async function dirList(fpath:string) {
    let list = []
    for await (const entry of Deno.readDir(fpath)) {
        list.push(entry)
    }
    return list
}

export async function readFile(fpath:string) {
    try {
        return await Deno.readTextFile(fpath)
    } catch (error) {
        return
    }
}

export async function readJson(fpath:string) {
    let json = await readFile(fpath)
    return (json) ? JSON.parse(json) : null
}

export async function writeFile(fpath:string, text:string) {
    try {
        return await Deno.writeTextFile(fpath, text)
    } catch (error) {
        return
    }
}

export async function writeJson(fpath:string, obj:string) {
    return await writeFile(fpath, JSON.stringify(obj))
}
