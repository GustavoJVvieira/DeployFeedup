import { Injectable, NotFoundException } from '@nestjs/common';
import { MoodsDTO } from './moods.dto';

@Injectable()
export class MoodsService {
    private moods : MoodsDTO[] = []

    createMoods(moods: MoodsDTO){
        this.moods.push(moods)
        console.log(this.moods)
    }

    findById(id:string):MoodsDTO{
        const foundMood = this.moods.find(mood => mood.id == id)
        if(!foundMood)throw new NotFoundException('Mood não encontrado');
        return foundMood
    }

    updateMood(mood: MoodsDTO){
        const indexMood = this.moods.findIndex(mood => mood.id == mood.id)
      
        if(indexMood < 0) throw new NotFoundException('Mood não encontrado');
        this.moods[indexMood] = mood;
        return;
    }






}
