import { Test, TestingModule } from '@nestjs/testing';
import { PodcastService } from './podcast.service';
import {NotFoundException} from "@nestjs/common";

describe('PodcastService', () => {
  let service: PodcastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PodcastService],
    }).compile();

    service = module.get<PodcastService>(PodcastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  });

  describe('getOne', () =>{
    it('should return a podcast', () =>{
      service.create({
        title : 'Test Podcast',
        date : '2024-03-07',
        category : ['Test Category1']
      });
      const podcast = service.getOne(1);
      expect(podcast).toBeDefined();
    });

    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
  describe('deleteOne', () =>{
    it('deletes a podcast', () =>{
      service.create({
        title : 'Test Podcast',
        date : '2024-00-00',
        category : ['Test Category1']
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });
    it('should throw a NotFoundException', () =>{
      try{
        service.deleteOne(999);
      } catch (e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('should create a podcast', () =>{
      const beforeCreate = service.getAll().length;
      service.create({
        title : 'Test Podcast',
        date : '2024-00-00',
        category : ['Test Category1']
      });
    const afterCreate = service.getAll().length;
    expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', ()=>{
    it('should update a podcast', () => {
      service.create({
        title : 'Test Podcast',
        date : '2023-00-00',
        category : ['Test Category1']
      });
      service.update(1, {title : 'Updated Title'});
      const updatedPodcast = service.getOne(1);
      expect(updatedPodcast.title).toEqual('Updated Title');
    });

    it('should throw a NotFoundException', () =>{
      try{
        service.update(999, {});
      } catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
