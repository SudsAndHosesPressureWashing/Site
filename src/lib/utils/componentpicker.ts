import BeforeAfterImage from "../../components/BeforeAfterImage.svelte";
import {PortableText} from '@portabletext/svelte'

export function getComponent(type: string) {
    return {
        'blockdocument':PortableText
    }[type]
}